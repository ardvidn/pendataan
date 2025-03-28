import { Column, Entity, Index } from "typeorm";

@Index("status_kawin_pkey", ["kdStatKawin"], { unique: true })
@Entity("status_kawin", { schema: "public" })
export class StatusKawin {
  @Column("character", { primary: true, name: "kd_stat_kawin", length: 1 })
  kdStatKawin!: string;

  @Column("character varying", {
    name: "ket_stat_kawin",
    nullable: true,
    length: 30,
  })
  ketStatKawin!: string | null;
}
