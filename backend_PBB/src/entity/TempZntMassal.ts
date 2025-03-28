import { Column, Entity, Index } from "typeorm";

@Index("temp_znt_massal_pkey", ["jnsZntMassal", "kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noZntMassal"], { unique: true })
@Index("t2_d4_fk", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], {})
@Entity("temp_znt_massal", { schema: "public" })
export class TempZntMassal {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_znt_massal", length: 4 })
  noZntMassal!: string;

  @Column("character", { primary: true, name: "jns_znt_massal", length: 1 })
  jnsZntMassal!: string;

  @Column("character", { name: "kd_znt_massal", nullable: true, length: 2 })
  kdZntMassal!: string | null;

  @Column("smallint", {
    name: "status_znt_massal",
    nullable: true,
    default: () => "0",
  })
  statusZntMassal!: number | null;
}
