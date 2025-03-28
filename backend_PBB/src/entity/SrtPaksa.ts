import { Column, Entity, Index } from "typeorm";

@Index("srt_paksa_pkey", ["kdKantor", "kdKanwil", "noSrtPaksa"], {
  unique: true,
})
@Index("g14_g12_fk3", ["noSrtTegoran"], {})
@Entity("srt_paksa", { schema: "public" })
export class SrtPaksa {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_srt_paksa", length: 30 })
  noSrtPaksa!: string;

  @Column("character", { name: "no_srt_tegoran", length: 30 })
  noSrtTegoran!: string;

  @Column("character varying", { name: "no_ba_srt_paksa", length: 30 })
  noBaSrtPaksa!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_srt_paksa" })
  tglTerbitSrtPaksa!: Date;

  @Column("integer", { name: "biaya_harian_juru_sita" })
  biayaHarianJuruSita!: number;

  @Column("integer", { name: "biaya_perjalanan_juru_sita" })
  biayaPerjalananJuruSita!: number;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_paksa",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtPaksa!: Date;

  @Column("character", { name: "nip_pencetak_surat_paksa", length: 18 })
  nipPencetakSuratPaksa!: string;
}
