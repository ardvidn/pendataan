import { Column, Entity, Index } from "typeorm";

@Index("pekerjaan_kegiatan_pkey", ["kdKegiatan", "kdPekerjaan"], {
  unique: true,
})
@Entity("pekerjaan_kegiatan", { schema: "public" })
export class PekerjaanKegiatan {
  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("character varying", { name: "nm_kegiatan", length: 30 })
  nmKegiatan!: string;
}
