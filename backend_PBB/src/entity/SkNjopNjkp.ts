import { Column, Entity, Index } from "typeorm";

@Index("sk_njop_njkp_pkey", ["kdSkNjopNjkp"], { unique: true })
@Entity("sk_njop_njkp", { schema: "public" })
export class SkNjopNjkp {
  @Column("smallint", { primary: true, name: "kd_sk_njop_njkp" })
  kdSkNjopNjkp!: number;

  @Column("character", { name: "no_sk_njop_njkp", nullable: true, length: 30 })
  noSkNjopNjkp!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_sk_njop_njkp",
    nullable: true,
  })
  tglSkNjopNjkp!: Date | null;
}
