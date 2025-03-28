import { Column, Entity, Index } from "typeorm";

@Index("status_keluarga_pkey", ["kdStatus"], { unique: true })
@Entity("status_keluarga", { schema: "public" })
export class StatusKeluarga {
  @Column("character", { primary: true, name: "kd_status", length: 2 })
  kdStatus!: string;

  @Column("character varying", {
    name: "ket_status",
    nullable: true,
    length: 30,
  })
  ketStatus!: string | null;
}
